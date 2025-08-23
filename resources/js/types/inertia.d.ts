import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { PageProps } from '.';

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, InertiaPagePropsType {}
}

declare module '@inertiajs/react' {
    interface PageProps extends InertiaPagePropsType {}
}

type InertiaPagePropsType = Omit<PageProps, keyof InertiaPageProps>;
