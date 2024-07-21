import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const CustomInput = ({multiline=false, handleChange, placeholder, value=null, password = false, icon = undefined, color = "rgb(109 109 109)", classes='', isNum = false}) => {
    const [isVisible, setIsVisible] = useState(password)

    return (
        <View className={`${classes} relative   justify-center items-center `}>
            {
                icon &&
                <View className='absolute z-50 top-[22px] left-3'>
                    <Ionicons className='' color={color} size={18} name={icon} />
                </View>
            }
            <TextInput 
                onChangeText={handleChange}
                multiline={multiline}
                numberOfLines={3}
                value={value&&String(value)}
                inputMode={isNum ? 'numeric' : 'text'}
                className={`${password && ' pr-[120px]'} px-4 bg-gray-200 border-gray-200 border my-2 rounded-2xl h-12 w-full`} 
                placeholder={placeholder} 
                style={[password && { paddingRight: 40 }, icon && { paddingLeft: 40 }]} 
                secureTextEntry={password && isVisible} />
            {
                password &&
                <TouchableOpacity 
                    className='absolute right-3 top-[21px]' 
                    onPress={() => setIsVisible(!isVisible)}>
                    <Ionicons name={isVisible ? 'eye-off' : 'eye'} size={24} color='gray' />
                </TouchableOpacity>  // Toggle password visibility on click.
            }
        </View>

    )
}

export default CustomInput