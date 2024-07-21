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

const AddBudget = () => {
    const [expenseCategories, setExpenseCategories] = useState(categories.filter(c=>c!="Income"))
    const [selectedCategories, setSelectedCategories] = useState([{category:"Travel", amount:5000}, {category:"Entertainment", amount:8000}])
    const onSelectCategory = (category) =>
        {
            // console.log(category);
            setExpenseCategories(prev=>prev.filter(cat => cat!=category))
            setSelectedCategories(prev=>([...prev, {category:category ,amount:null}]))
            console.log(selectedCategories);
            
        }
    const removeHandler = (category) => {
        setSelectedCategories(prev=>prev.filter(cat => cat.category!=category))
        setExpenseCategories(prev=>([...prev, category]))
        console.log(selectedCategories);
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
                    <CustomButton title='Submit'/>
                </View>
            }
        />

    </SafeAreaView>
  )
}

export default AddBudget