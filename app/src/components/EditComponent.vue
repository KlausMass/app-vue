<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Editar Produto</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="nomeProduto">Nome produto</label>
                    <input type="text" class="form-control" v-model="produto.nomeProduto" required>
                </div>
                <div class="form-group">
                    <label for="qtd">Quantidade</label>
                    <input type="number" class="form-control" v-model="produto.qtd" required @keypress="isNumber($event)">
                </div>
                <div class="form-group">
                    <label for="valor">Valor</label>
                    <input type="number" class="form-control" v-model="produto.valor" required @keypress="isNumber($event)">
                </div>
                <div class="form-group">
                    <label for="descricao">Descrição</label>
                    <input type="text" class="form-control" v-model="produto.descricao" required>
                </div>
                <div class="form-group">
                    <label for="vendedor">Vendedor</label>
                    <input type="text" class="form-control" v-model="produto.vendedor" required>
                </div>
                <div class="form-group mt-3">
                    <button class="btn btn-success btn-block w-100" type="submit">Alterar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            produto: {}
        }
    },
    created() {
        let apiURL = `http://localhost:3000/produtos/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.produto = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/produtos/${this.$route.params.id}`;

            axios.put(apiURL, this.produto).then((res) => {
                console.log(res)
                alert('Alteração salva!');
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>