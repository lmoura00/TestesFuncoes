import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../Pages/Home'
import { Calendario } from '../Pages/Calendario'
import { Slide } from '../Pages/Slide'
import { FloatingLabel } from '../Pages/FloatingLabel'
import { SwipeBt } from '../Pages/SwipeButton'
import { DropD } from '../Pages/Dropdown'
import { Carrosel } from '../Pages/Carrosel'

export function Routes(){

    const {Navigator, Screen} = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Home} options={{headerShown:false}}/>
                <Screen name='Calendario' component={Calendario}/>
                <Screen name='Slide' component={Slide}/>
                <Screen name='FloatingLabel' component={FloatingLabel}/>
                <Screen name='swipeButton' component={SwipeBt}/>
                <Screen name='DropDown' component={DropD}/>
                <Screen name='Carrosel' component={Carrosel}/>
       
            </Navigator>
        </NavigationContainer>
    )
}