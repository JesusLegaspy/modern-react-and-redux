import { GoBellFill, GoCloud, GoCalendar, GoFlame } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBellFill />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoFlame />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCloud />
          See deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCalendar />
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>Meow!</Button>
      </div>
    </div>
  );
}

export default App;