import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) { }

  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(typeof id)
    return this.coffeesService.findOne('' + id)
  }

  @Post()
  create(@Body() createCoffeDto: CreateCoffeeDto) {
    console.log(createCoffeDto instanceof CreateCoffeeDto)
    return this.coffeesService.create(createCoffeDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeesService.remove(id)
  }
}
