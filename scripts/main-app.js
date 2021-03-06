import * as dataServ from "./data-service.js";

(() => {
	let headTitle = "Cat cards list";
	let cards = [{ id: 1, title: 'title' }];

	dataServ.getAllCards().then(function(allCards) {
		vm.cards = allCards;
	});
	console.log(cards);

	Vue.component('card-show', {
		props: ['card'],
		template: `
		<div class="flipper mb-3" ontouchstart="this.classList.toggle('hover');">
			<div class="front card text-center shadow-sm">
				<img class="card-img-top" v-bind:src="card.imageUrl" alt="Cat image" width="250" height="200" />
				<div class="card-body">
					<h5 class="card-title">{{card.title}}</h5>
				</div>
			</div>
			<div class="back card text-center shadow-sm">
				<div class="card-body">
					<h6 class="card-subtitle mb-2 text-muted">{{card.title}}</h6>
					<p class="card-text">{{card.text}}</p>
				</div>
				<div class="card-footer">
					<button href="#" class="btn btn-primary card-link">Edit that cat</button>
				</div>
			</div>
		</div>
		`
	})

	Vue.component('card-list', {
		props: ['cards'],
		data: function() {
			return {
				headTitle
			}
		},
		template: `
			<section class="container">
				<h2>Cat card list</h2>
				<hr />
				<div class="card-group">
					<card-show
					v-for="card in cards"
					v-bind:key="card.id"
					v-bind:card="card">
					</card-show>
				</div>
				<button class="btn btn-lg btn-danger circle add" v-on:click="$emit('change-comp', 'create')"><i class="fas fa-plus"></i></button>
			</section>
		`
	})

	Vue.component('card-create', {
		methods: {
			onSubmit(event) {
				if(event.target.checkValidity()) {
					dataServ.createCard();
				}
			}
		},
		template: `
			<section class="container">
				<h2>Cat card form</h2>
				<hr />
				<form novalidate class="was-validated" v-on:submit.prevent="onSubmit($event)">
				<div class="form-group row">
					<label for="cardTitle" class="col-sm-2 col-form-label">Card title</label>
					<input type="text" required class="form-control col-sm-10" id="cardTitle" placeholder="Card title">
					<div class="invalid-feedback offset-md-2 col-sm-10">
					That field is required. Please provide a value.
					</div>
				</div>
				<div class="form-group row">
					<label for="cardImage" class="col-sm-2 col-form-label">Card image URL</label>
					<input type="url" required class="form-control col-sm-10" id="cardImage" placeholder="Card image URL">
					<div class="icurrentCompnvalid-feedback offset-md-2 col-sm-10">
					That field is required and attempt an URL as value. Please provide a value that respect URL format.
					</div>
				</div>
				<div class="form-group row">
					<label for="cardDescription" class="col-sm-2 col-form-label">Card description</label>
					<textarea class="form-control col-sm-10" id="cardDescription"></textarea>
				</div>
				<button class="btn btn-danger">Delete</button>
				<button type="submit" class="btn btn-primary">Save</button>
				</form>
			</section>
		`
	})
	console.log(cards);
	let vm = new Vue({
		el: '#cat-app',
		data: {
			cards,
			headTitle,
			year: new Date().getFullYear(),
			comp: 'list',
			counter: 0,

		},
		computed: {
			currentComp: function() {
				return 'card-' + this.comp;
			}

		}
	})
})();
