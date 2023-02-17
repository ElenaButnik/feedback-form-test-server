import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { Form } from './models/form.model';
@Module({
  imports: [SequelizeModule.forFeature([Form])],
  providers: [FormService],
  controllers: [FormController],
})
export class FormModule {}
