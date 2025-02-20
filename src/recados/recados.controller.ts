import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    @Get('recados')
    findAll() : string {
        return 'Essa rota retorna todos os recados';
    }

    @Get('recados/:id')
    findOne() : string {
        return 'Essa rota retorna um recado';
    }
}
