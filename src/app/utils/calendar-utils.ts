export function getEventStyle(type: string, title: string, description: string, startTime: string, endTime: string) {
  switch (type) {
    case 'timeGridWeek':
      return `
          <div>
            <span class='--truncate-3 text-black'>${title}</span><br/>
            <span class='--truncate text-black'>${description}</span>
            <span class='--truncate text-black'>${startTime} - ${endTime}</span><br/>
          </div>
        `;
    case 'timeGridDay':
      return `
            <span class='--truncate-3 text-black'>${title}</span><br/>
            <div class='d-flex align-items-center'>
              <small class='--truncate text-black'>${description}</small>
              <small class='--truncate text-black'>${startTime} - ${endTime}</small><br/>
            </div>
        `;
    default:
      return `
          <span class='--truncate-3 text-black'>${title}</span><br/>
          `;
  }
}
