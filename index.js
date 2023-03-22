import schedule from "node-schedule"

const rule = new schedule.RecurrenceRule();

rule.second = [0, new schedule.Range(0, 59)]//run every second
//rule.minute = 1 //first minute of every hour
//rule.minute = [0, new schedule.Range(0, 59)] //every minute
//rule.hour = 0 //at 12 everyday it will reset

schedule.scheduleJob(rule, function(){
  console.log('one');
});