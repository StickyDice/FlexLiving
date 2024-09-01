import CalendarIcon from "~/shared/ui/icons/calendar-icon";
import MessageIcon from "~/shared/ui/icons/message-icon";
import SofaIcon from "~/shared/ui/icons/sofa-icon";
import WifiIcon from "~/shared/ui/icons/wifi-icon";
import Card from "~/widgets/home/features/view/card/card";

export default function Features() {
  return (
    <section>
      <div className="centralize-container flex flex-col items-center justify-center mb-35">
        <div className="max-w-4xl mb-15">
          <h2 className="text-5xl font-bold text-center mb-4">
            Id aliquam molestie nunc quis turpis imperdiet quis
          </h2>
          <p className="text-lg text-center">
            Euismod condimentum tempus quis nibh. Accumsan imperdiet non
            vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci quam
            enim adipiscing interdum purus.
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <Card
            icon={CalendarIcon()}
            title="Flexible living"
            description="Stay as Long or as little as you need with month-to-
month contracts"
          />
          <Card
            icon={SofaIcon()}
            title="Move-in ready"
            description="Ready to move in with everything you need"
          />
          <Card
            icon={WifiIcon()}
            title="High-speed Wi-Fi"
            description="Best in class internet speeds suitable for working 
from home"
          />
          <Card
            icon={MessageIcon()}
            title="24/7 support"
            description="On hand team for any issues you have"
          />
        </div>
      </div>
    </section>
  );
}
