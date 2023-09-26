global {
  module "next" {
    import type { ParsedUrlQuery } from "querystring";

    type Params = Record<string, string | Array<string>>;

    interface NextPageProps {
      params: Params;
      searchParams: ParsedUrlQuery;
    }

    type NextLayoutProps<P = unknown> = P & {
      params: Params;
      children: React.ReactNode;
    };
  }
}
