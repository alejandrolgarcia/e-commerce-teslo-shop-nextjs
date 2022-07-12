import { Box, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../components/layouts';

const Custom404 = () => {
    return (
        <ShopLayout title={'Page Not Found'} pageDescription={'Contenido de esta página no encontrado'}>
            <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Typography variant='h1' component='h1' fontSize={ 50 } fontWeight={ 200 }>404 |</Typography>
                <Typography marginLeft={ 2 }>Page not found</Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404;