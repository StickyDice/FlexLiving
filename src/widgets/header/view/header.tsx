import Image from "next/image";
import AppLink from "~/shared/ui/app-link/app-link";
import useBlogLinkVM from "~/widgets/header/vm/use-blog-link-vm";
import useContactsLinkVM from "~/widgets/header/vm/use-contacts-link-vm";
import useHomeLinkVM from "~/widgets/header/vm/use-home-link-vm";
import useLandloardsLinkVM from "~/widgets/header/vm/use-landloards-link-vm";
import useLogoLinkVM from "~/widgets/header/vm/use-logo-link-vm";

export default function Header() {
  const homeLinkVM = useHomeLinkVM();
  const logoLinkVM = useLogoLinkVM();
  const blogLinkVM = useBlogLinkVM();
  const contactsLinkVM = useContactsLinkVM();
  const landloardsLinkVM = useLandloardsLinkVM();

  return (
    <header className="bg-white px-16 py-3">
      <nav className="flex items-center">
        <AppLink vm={logoLinkVM} className="mr-auto">
          <Image src="/logo.jpg" alt="Flex Living" width={130} height={58} />
        </AppLink>

        <div className="flex gap-10">
          <AppLink vm={homeLinkVM}>Home</AppLink>
          <AppLink vm={landloardsLinkVM}>Landloards</AppLink>
          <AppLink vm={blogLinkVM}>Blog</AppLink>
          <AppLink vm={contactsLinkVM}>Contacts</AppLink>
        </div>
      </nav>
    </header>
  );
}
