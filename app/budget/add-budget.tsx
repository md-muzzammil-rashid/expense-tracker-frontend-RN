import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories } from '@/constants/Categories'
import { categoryIcons } from '@/constants/CategoriesIconsVector'
import CustomInput from '@/components/common/CustomInput'
import { Ionicons } from '@expo/vector-icons'
import RnRangeSlider from 'rn-range-slider'
import AddBudgetCard from '@/components/core/budget/AddBudgetCard'
import BudgetCategorySelectCard from '@/components/core/budget/BudgetCategorySelectCard'
import CustomButton from '@/components/common/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { updateBudgetAPI } from '@/Services/Operations/BudgetAPI'
import { useSelector } from 'react-redux'

const AddBudget = () => {
    const {budget} = useSelector(state=>state?.user)
    const [expenseCategories, setExpenseCategories] = useState(categories.filter(c=>c!="INCOME"))
    const [selectedCategories, setSelectedCategories] = useState(budget)
    const onSelectCategory = (category) =>
        {
            // console.log(category);
            setExpenseCategories(prev=>prev.filter(cat => cat!=category))
            setSelectedCategories(prev=>([...prev, {category:category ,amount:null}]))
            
        }
    const removeHandler = (category) => {
        setSelectedCategories(prev=>prev.filter(cat => cat.category!=category))
        setExpenseCategories(prev=>([...prev, category]))
        console.log(selectedCategories);
    }

    const handleSubmit = async () => {
        selectedCategories.forEach(cat=>{
            if(!cat.amount){
                Toast.show({
                    text1: 'Please enter Amount',
                    type:'error'
                })
                return
            }
        })
            // console.log(JSON.stringify(selectedCategories));
            const res = await updateBudgetAPI(selectedCategories);
            console.log(res);
    }

    useEffect(()=>{
        selectedCategories.forEach(cat =>
            setExpenseCategories(prev=>prev.filter(p => p!=cat?.category))
        )
    },[])
  return (
    <SafeAreaView edges={['bottom']} >
        <FlatList
            data={selectedCategories}
            ListHeaderComponent={    <View className='flex-row py-3 flex-wrap gap-2'>
                {
                    expenseCategories.map(category=>(
                        <TouchableOpacity onPress={()=>onSelectCategory(category)} className='flex-row bg-white rounded-2xl px-2 py-[2] items-center'>
                           <BudgetCategorySelectCard category={category} />
                        </TouchableOpacity>
                    ))
                }
                </View>}
            renderItem={(category)=><AddBudgetCard selectedCategories={selectedCategories} removeHandler={removeHandler} setSelectedCategories={setSelectedCategories}  category={category.item} />}
            ListFooterComponent={    
                selectedCategories.length > 0 &&
                <View className='px-3'>
                    <CustomButton pressFunction={handleSubmit} title='Submit'/>
                </View>
            }
        />

    </SafeAreaView>
  )
}

export default AddBudget