import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Actions from '../../../services/actions'
import {useDispatch, useSelector} from 'react-redux'
import { ITab } from '../../../utils/types'

const BurgerIngredientsTab = () => {
    const dispatch = useDispatch()
    const current = useSelector((state: ITab) => state.activeTab)

    const tabClick = (e: string) => {
        dispatch({
            type: Actions.ACTIVE_TAB,
            value: e
        });
    }

    return (
        <div style={{ display: 'flex' }}>
            <Tab
                value="bun"
                active={ current === 'bun' }
                onClick={ (e) => tabClick(e) }
            >
                Булки
            </Tab>
            <Tab
                value="sauce"
                active={ current === 'sauce' }
                onClick={ (e) => tabClick(e) }
            >
                Соусы
            </Tab>
            <Tab
                value="main"
                active={ current === 'main' }
                onClick={ (e) => tabClick(e) }
            >
                Начинки
            </Tab>
        </div>
    )
}

export default BurgerIngredientsTab;

