<template>
    <section class="container">
        <h2>Cat card list</h2>
        <hr />
        <div class="card-group">
            <CatCard
            v-for="card in allCards"
            v-bind:key="card.id"
            v-bind:cardTitle="card.title"
            v-bind:cardImgUrl="card.imageUrl"
            v-bind:cardDesc="card.description">
            </CatCard>
        </div>
        <button class="btn btn-lg btn-danger circle add" v-on:click="$emit('change-comp', 'create')"><i class="fas fa-plus"></i></button>
    </section>
</template>

<script>
import * as dataServ from "./../data-service.js";
import CatCard from "./CatCard"

export default {
    components: { CatCard },
    data: function() {
        return {
            allCards: []
        }
    },
    created() { 
        dataServ.getAllCards().then((allCards) => {
            this.allCards = allCards;
        }); 

    }
}
</script>

