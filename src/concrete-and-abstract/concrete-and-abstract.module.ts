import { Module } from '@nestjs/common';
import { ConcreteAndAbstractController } from './concrete-and-abstract.controller';
import { ConcreteAndAbstractService } from './concrete-and-abstract.service';

@Module({
  controllers: [ConcreteAndAbstractController],
  providers: [ConcreteAndAbstractService]
})
export class ConcreteAndAbstractModule {}
