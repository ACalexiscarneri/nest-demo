import { Controller } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags()
@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}
}
