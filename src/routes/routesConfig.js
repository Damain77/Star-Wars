import PeoplePage from '@Containers/PeoplePage/PeoplePage';
import HomePage from '@Containers/HomePage/HomePage';
import NotFoundPage from '@Containers/NotFoundPage/NotFoundPage';
import PersonPage from '@Containers/PersonPage/PersonPage';
import FavoritePage from '@Containers/FavoritePage/FavoritePage';
import SearchPage from '@Containers/SearchPage/SearchPage';
import ErrorMessage from '@Components/ErrorMessage/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people/',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/not found',
        element: <NotFoundPage />
    },
    {
        path: '/favorite/',
        element: <FavoritePage />
    },
    {
        path: '/search/',
        element: <SearchPage />
    },
    {
        path: '/fale/',
        element: <ErrorMessage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]

export default routesConfig