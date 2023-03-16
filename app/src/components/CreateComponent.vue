<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Novo Produto</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="nomeProduto">Nome produto</label>
                    <input type="text" class="form-control" v-model="produto.nomeProduto" required>
                </div>
                <div class="form-group">
                    <label for="qtd">Quantidade</label>
                    <input type="number" class="form-control" v-model="produto.qtd" required>
                </div>
                <div class="form-group">
                    <label for="valor">Valor</label>
                    <input type="number" class="form-control" v-model="produto.valor" required>
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
                    <button class="btn btn-success btn-block w-100" type="submit">Criar</button>
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
            produto: {
                id: '',
                nomeProduto: '',
                qtd: '',
                valor: '',
                descricao: '',
                vendedor: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:3000/produtos'

            axios.post(apiURL, this.produto).then(() => {
                alert('Produto registrado!!')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>