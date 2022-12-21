import React from 'react'
import { Text } from 'react-native'
import style from './style'

interface Props {
  title: string
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Text testID='title' style={style.title}>{title}</Text>
  )
}

export default Title