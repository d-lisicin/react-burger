import React from 'react'
import {useDispatch, useSelector} from './store'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { ProtectedRoute } from './components/protected-route'
import * as Actions from './store/actions'
import {
    HomePage,
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    ProfilePage,
    ProfileOrdersPage,
    IngredientsPage,
    NotFoundPage,
    Feed,
    FeedOrderPage
} from './pages'
import Modal from './components/modal/modal'
import IngredientDetails from './components/ingredient-details/ingredient-details'
import { ILocation } from './utils/type'
import FeedOrderDetail from './components/feed-order-detail/feed-order-detail'

export function Router() {
    const location = useLocation<ILocation>()
    const history = useHistory()
    const dispatch = useDispatch()
    const ingredientId = location?.state && location.state.ingredientId
    const ordersList = useSelector((state) => state.ws.messages)

    const closeModal = () => {
        history.goBack()
        document.body.classList.remove('overflow-hidden')
        dispatch({ type: Actions.DELETE_INGREDIENT_VIEW })
        dispatch({ type: Actions.DELETE_ORDER_VIEW })
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
                <ProtectedRoute exact path="/profile/orders">
                    <ProfileOrdersPage />
                </ProtectedRoute>
                <Route exact path="/ingredients/:id" component={ IngredientsPage } />
                <Route exact path="/feed" component={ Feed } />
                <Route exact path="/feed/:id" component={ FeedOrderPage } />

                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
            {ingredientId && (
                <Route path="/ingredients/:id">
                    <Modal
                        title='Детали ингредиента'
                        onClick={ closeModal }
                    >
                        <IngredientDetails />
                    </Modal>
                </Route>
            )}

            {ordersList.length !== 0 &&ingredientId && (
                <Route path="/feed/:id">
                    <Modal
                        title=''
                        onClick={ closeModal }
                    >
                        <FeedOrderDetail />
                    </Modal>
                </Route>
            )}
        </>
    )
}
