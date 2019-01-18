import {
    Post ,
    Controller
} from '@nestjs/common';

@Controller('roles')
export class RouleController{ 
    @Post()
    async addItem(){
        return 'GODDBYE :>';
    }
}