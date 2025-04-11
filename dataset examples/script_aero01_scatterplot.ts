import { BaseProcessor, IExecuteContext } from '@elipse/processor-lib';
import * as webapi from '@elipse/webapi/common';
import * as portal from '@elipse/portal/processor';

export class CodeProcessor extends BaseProcessor {
  async on_process(context: IExecuteContext, inputs: Map<string, any>): Promise<any> {
    let epm = context.get_service(portal.EpmService);

    let input1: portal.TimeRange = inputs.get('Period');
    let start = input1.start;
    let end = input1.end;

    let varpower = await epm.dataObjectAsync('Aero01_Active_power');
    let varspeed = await epm.dataObjectAsync('Aero01_Wind_speed');
    let powerData = await varpower.historyProcessedAsync(start, end, webapi.AggregateTypes.Interpolative, 86400000);
    let speedData = await varspeed.historyProcessedAsync(start, end, webapi.AggregateTypes.Interpolative, 86400000);
    let powerValues = []
    let speedValues = []

    for (let index = 0; index < powerData.length; index++) {
      powerValues.push(powerData[index].value);
      speedValues.push(speedData[index].value);
    }
    let sortedPower: number[] = powerValues.sort((a, b) => a - b);
    let sortedSpeed: number[] = speedValues.sort((a, b) => a - b);

    let values = [];
    for (let index = 0; index < powerData.length; index++) {
      values.push({ power: sortedPower[index], speed: sortedSpeed[index] });
    }
    
    return values;  /* Array<webapi.DataValue> */
  }
}
