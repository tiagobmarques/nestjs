import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivroService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livrosService: LivroService) {

    }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterum(@Param() params): Promise<Livro> {
        return this.livrosService.obterum(params.id);
    }

    @Post()
    async criar(@Body() livro) {
        return this.livrosService.criar(livro);
    }
/*
    @Put()
    async alterar(@Body() livro): Promise<[number, Livro[]]> {
        return this.livrosService.alterar(livro);
    }
*/
    @Delete(':id')
    async apagar(@Param() params) {
        this.livrosService.apagar(params.id);
    }
}