<template>
    <div id="app">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import CatCardsList from './CatCardsList'
import Header from './Header'
import Footer from './Footer' 

export default {
    components: { CatCardsList, Header, Footer }
}
</script>
