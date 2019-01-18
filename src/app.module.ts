import { Module } from '@nestjs/common';
import { ItemsController  } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ShoppingCartController} from './shopping-cart/shopping-cart.controller';
import { RouleController} from './roles/roles.controller';

@Module({
  imports: [],
  controllers: [ItemsController,ShoppingCartController,RouleController ],
  providers: [ItemsService],
})
export class AppModule {}
