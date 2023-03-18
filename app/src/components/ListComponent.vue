<template>
    <div class="justify-content-center">
        <h1>Lista de Produtos</h1>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Nome produto</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th>Descrição</th>
                                <th>Vendedor</th>
                                <th class="text-end">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="produto in produtos" :key="produto.id">
                                <td>{{ produto.nomeProduto }}</td>
                                <td>{{ produto.qtd }}</td>
                                <td>{{ produto.valor }}</td>
                                <td>{{ produto.descricao }}</td>
                                <td>{{ produto.vendedor }}</td>
                                <td class="text-end">
                                    <router-link :to="{ name: 'edit', params: { id: produto.id } }"
                                        class="btn btn-success me-2">
                                        Editar
                                    </router-link>
                                    <button @click.prevent="excluir(produto)" class="btn btn-danger">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import axios from "axios"

export default {
    data() {
        return {
            produtos: []
        }
    },
    created() {
        let apiURL = 'http://localhost:3000/produtos'
        axios.get(apiURL).then((res) => {
            this.produtos = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        excluir(produto) {
            let apiURL = `http://localhost:3000/produtos/${produto.id}`;
            let indexOfArrayItem = this.produtos.findIndex(i => i.id === produto.id);

            if (window.confirm("Deseja realmente excluir o produto " + produto.nomeProduto + "?")) {
                axios.delete(apiURL).then(() => {
                    this.produtos.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}

</script>