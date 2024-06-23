'use client';

import { SessionProvider } from 'next-auth/react';

const Provider = ({
	children,
	session,
}: {
	// @ts-ignore
	children: ReactNode;
	// @ts-ignore
	session?: Session;
}) => <SessionProvider session={session}>{children}</SessionProvider>;

export default Provider;
