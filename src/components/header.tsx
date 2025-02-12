import { Button } from './ui/button';
import { ModeToggle } from './ui/mode-toggle';

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <span className="text-2xl font-bold">Aliff Amir</span>
        <div className="flex items-center">
          <Button variant={'ghost'} className="text-md px-2 py-2">
            projects
          </Button>
          <Button variant={'ghost'} className="text-md px-2 py-2">
            blog
          </Button>
          <Button variant={'ghost'} className="text-md px-2 py-2">
            about
          </Button>
          <span>
            <ModeToggle />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
