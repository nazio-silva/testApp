import React, { useState, useEffect } from 'react'
import { Image, View } from 'react-native'

import { CLIENT_ID } from "@env";
import { api } from 'services/api';
import Title from './../Title/index';

import style from './style'

const ListCard = () => {

  const [listCats, setCats] = useState([])

  const path = "/3/gallery/search/?q=cats"

  useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    const response = await api.get(path, { headers: { Authorization: `Client-ID ${CLIENT_ID}` } })
    const data = response.data
    setCats(data)
  }

  const removeCharacter = (image: any) => {
    const gifImage = image.gifv;
    const gif = gifImage?.replace(/.$/, '');

    if (gif !== undefined) {
      return gif
    }
  }

  const renderGif = (image: any) => {
    return (
      <Image
        resizeMode='contain'
        style={style.image}
        source={{
          uri: removeCharacter(image),
        }}
      />
    )
  }

  const renderImage = (image: any) => {
    return (
      <Image
        resizeMode='contain'
        style={style.image}
        source={{
          uri: image.link,
        }}
      />
    )
  }

  return (
    listCats?.data?.map((item: any, index: string) => {
      return (
        <View key={index} style={style.view}>

          <Title title={item.title} />

          <View style={style.card}>
            {
              item.images.map((image: any) => {
                return (
                  image.type === "image\/jpeg" || image.type === "image\/jpeg" || image.type === "image\/png" ?
                    renderImage(image)
                    :
                    renderGif(image)
                )
              })
            }
          </View>
        </View>
      )
    })
  )
}

export default ListCard