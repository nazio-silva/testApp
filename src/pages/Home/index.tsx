
import React from 'react'
import { ScrollView } from 'react-native'
import ListCard from 'components/listCard';

interface Props {

}

const Home: React.FC<Props> = (props) => {
  return (
    <ScrollView>
      <ListCard />
    </ScrollView>
  )
}

export default Home