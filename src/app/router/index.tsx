import { BaseLayout, ContainerSlot, HeaderSlot } from "@app/layout";
import { Auth } from "@pages/auth";
import { Fallback } from "@pages/fallback";
import { NotFound } from "@pages/not-found";
import { PrivateRoutes, PublicRoutes } from "@shared/lib/private-routes";
import { RouterPaths } from "@shared/lib/router";
import { Container } from "@shared/ui/container";
import { Header } from "@widgets/header";
import { createBrowserRouter } from "react-router-dom";

export const Routing = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        element: (
          <BaseLayout>
            <ContainerSlot>
              <Container>
                <Auth />
              </Container>
            </ContainerSlot>
          </BaseLayout>
        ),
        path: RouterPaths.AUTH_PAGE,
        errorElement: <Fallback />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: (
          <BaseLayout>
            <HeaderSlot>{(params) => <Header />}</HeaderSlot>

            <ContainerSlot>
              <Container>
                <NotFound />
              </Container>
            </ContainerSlot>
          </BaseLayout>
        ),
        path: RouterPaths.NOT_FOUND_PAGE,
        errorElement: <Fallback />,
      },
    ],
  },
]);
