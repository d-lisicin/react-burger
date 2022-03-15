import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import { ITab } from '../../../utils/types'

const BurgerIngredientsTab = () => {
    const current = useSelector((state: ITab) => state.activeTab)

    const tabClick = () => {
        return
    }

    return (
        <div style={{ display: 'flex' }}>
            <Tab
                value="bun"
                active={ current === 'bun' }
                onClick={tabClick}
            >
                Булки
            </Tab>
            <Tab
                value="sauce"
                active={ current === 'sauce' }
                onClick={tabClick}
            >
                Соусы
            </Tab>
            <Tab
                value="main"
                active={ current === 'main' }
                onClick={tabClick}
            >
                Начинки
            </Tab>
        </div>
    )
}

export default BurgerIngredientsTab;

