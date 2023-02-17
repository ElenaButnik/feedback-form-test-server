import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Header,
} from '@nestjs/common';
import { CreateForm } from './dto/create-form.dto';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createForm(@Body() createForm: CreateForm) {
    return this.formService.create(createForm);
  }
}
