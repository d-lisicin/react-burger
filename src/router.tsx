import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { ProtectedRoute } from './components/protected-route'
import Actions from './services/actions'
import { HomePage, RegisterPage, LoginPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage, IngredientsPage } from './pages'
import Modal from './components/modal/modal'
import IngredientDetails from './components/ingredient-details/ingredient-details'
import { ILocation } from './utils/types'

export function Router() {
    const location = useLocation<ILocation>()
    const history = useHistory()
    const dispatch = useDispatch()
    const ingredientId = location?.state && location.state.ingredientId

    const closeIngredientDetails = () => {
        history.goBack()
        document.body.classList.remove('overflow-hidden')
        dispatch({ type: Actions.DELETE_INGREDIENT_VIEW })
    }

    return (
        <>
            <Switch location={ ingredientId || location }>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/login" component={ LoginPage } />
                <Route exact path="/register" component={ RegisterPage } />
                <Route exact path="/forgot-password" component={ ForgotPasswordPage } />
                <Route exact path="/reset-password" component={ ResetPasswordPage } />
                <ProtectedRoute exact path="/profile">
                    <ProfilePage />
                </ProtectedRoute>
                <Route exact path="/ingredients/:id" component={ IngredientsPage } />
            </Switch>
            {ingredientId && (
                <Route path="/ingredients/:id">
                    <Modal
                        title='Детали ингредиента'
                        onClick={ closeIngredientDetails }
                    >
                        <IngredientDetails />
                    </Modal>
                </Route>
            )}
        </>
    );
}
