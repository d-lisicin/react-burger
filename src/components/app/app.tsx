import AppHeader from '../app-header/app-header'
import { Router } from '../../router'
import { useEffect } from 'react'
import { getIngredients } from '../../store/actions/ingredients'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../preloader/preloader'
import { checkUser } from '../../store/actions/auth'
import { IIngredientEl } from '../../utils/type'
import { getTokens } from '../../helpers/auth'

function App() {
    const dispatch = useDispatch()
    const ingredients = !!useSelector((state: IIngredientEl) => state.ingredients.items)
    const isIngredientsLoad = useSelector((state: { ingredients: { loading: boolean } }) => state.ingredients.loading)
    const { accessToken, refreshToken } = getTokens()

    useEffect(() => {
        if (ingredients) {
            dispatch(getIngredients())
        }
    }, [dispatch, ingredients])

    useEffect(() => {
        dispatch(checkUser())
    }, [dispatch, accessToken, refreshToken])

    if (!isIngredientsLoad) {
        return <Preloader />
    }

    return (
        <div className="App">
            <AppHeader />
            <Router />
        </div>
    )
}

export default App
