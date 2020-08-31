import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app';
  message= '';
  chats = [
    'Lorem ipsum dolor sit',
    'amet consectetur',
    'adipisicing elit. Qui voluptate',
    'culpa nemo doloribus',
    'numquam autem',
    'atque sapiente aliquam',
    'in quas tenetur',
    'hic perspiciatis',
    'omnis magni vitae itaque harum',
    'nulla nisi?'];
    constructor(private messageService: MessageService){
      
    }
    addChat(){
      if (this.message.length === 0){
        return;
      }
      this.chats.push(this.message);
      this.message = '';
      window.setInterval(() => {
        const elem = document.getElementById('scrolldiv')
        elem.scrollTop = elem.scrollHeight;
      }, 500);
    }
}
