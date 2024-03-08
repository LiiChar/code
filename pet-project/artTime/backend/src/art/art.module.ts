import { Module } from '@nestjs/common';
import { ArtResolver } from './art.resolver';
import { ArtService } from './art.service';

@Module({
  providers: [ArtResolver, ArtService]
})
export class ArtModule {}
