import React, { ReactElement, useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import './PageLayout.css';
import { ConfigPanel } from '../../components/ConfigPanel/ConfigPanel';
import { ConfigProvider } from '../../../application/contexts/ConfigContext';

interface IPageLayout {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: IPageLayout) => {
  const [openConfigPanel, setOpenConfigPanel] = useState(false);

  return (
    <ConfigProvider>
      <div className="relative w-full h-screen-dvh flex flex-col bg-white text-black">
        <PageHeader />

        {/* Content */}
        <div className="bg-white flex-1 overflow-auto">{children}</div>

        <ConfigPanel />
      </div>
    </ConfigProvider>
  );
};
