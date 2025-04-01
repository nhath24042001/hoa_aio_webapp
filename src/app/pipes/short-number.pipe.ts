import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {
  transform(value: number, decimals: number = 2): string {
    if (value >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(decimals) + 'B'
    } else if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(decimals) + 'M'
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(decimals) + 'K'
    }
    return value.toString()
  }
}
