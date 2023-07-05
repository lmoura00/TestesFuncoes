import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Modal,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const imagens = [
    { imgUrl: "https://thumbs2.imgbox.com/c9/5b/KohwYIW6_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/1b/e1/Ibl3dPvm_t.jpeg" },
    { imgUrl: "https://thumbs2.imgbox.com/b3/06/I4dalGU7_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/d9/d3/RoqHLRAp_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/9d/08/Ttg5To9u_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/88/55/8i3LHuKC_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/60/97/cRxf1g86_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/f8/bb/fOzXuc0W_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/99/f0/zpFXRPaA_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/81/20/9dryROmK_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/eb/1f/lKofPJML_t.jpg" },
    { imgUrl: "https://thumbs2.imgbox.com/46/29/JbNhSuSv_t.jpg" },
];

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

export function Carrosel(){
    const isCarousel = React.useRef(null);
    const CarouselCardItem = ({ item, index }) => {
    return (
            <View style={styles.containerCarousel} key={index}>
                <Image source={{ uri: item.imgUrl }} style={styles.imageCarousel} />
            </View>
        );
    };

    const [index, setIndex] = React.useState(0);
    return(
        <View style={styles.containerImages}>
          <Carousel
            layout="stack" //TIPO DE CARROSSEL
            layoutCardOffset={20} //MOSTRA QUANTOS FICAM ATRÁS DA IMAGEM *Quanto maior nº maior peso no desempenho*
            ref={isCarousel}
            data={imagens}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => setIndex(index)}
          />
          <Pagination
            dotsLength={imagens.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: "rgba(0, 0, 0, 0.92)",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    containerCarousel: {
        backgroundColor: "#334A58",
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 5,
        paddingTop: 5,
        shadowColor: "#000",
        marginTop: 15,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    imageCarousel: {
        width: ITEM_WIDTH,
        height: 350,
    },
    containerImages: {
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: "#d9d9d9",
      },
})