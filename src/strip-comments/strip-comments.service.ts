import { Injectable } from '@nestjs/common';

@Injectable()
export class StripCommentsService {
  stripComments(input: string, commentMarkers: string[]): string {
    const lines = input.split('\n');
    const result = lines.map(line => {
      let stripIndex = line.length;
      for (const marker of commentMarkers) {
        const index = line.indexOf(marker);
        if (index !== -1 && index < stripIndex) {
          stripIndex = index;
        }
      }
      return line.substring(0, stripIndex).trimEnd();
    });
    return result.join('\n');
  }
}
