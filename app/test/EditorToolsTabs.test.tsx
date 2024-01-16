import EditorToolsTabs from '../components/EditorToolsTabs';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { AppContextProvider } from '../context/AppContext';
import AppStoreProvider from '@/redux/provider';

describe('test EditorToolsTabs', () => {
  it('should render EditorToolsTabs', async () => {
    await act(async () => {
      render(
        <AppStoreProvider>
          <AppContextProvider>
            <EditorToolsTabs />
          </AppContextProvider>
        </AppStoreProvider>
      );
    });

    const toolsTabs = screen.getByTestId('tools-tabs');
    expect(toolsTabs).toBeInTheDocument();

    const toolsTabsVariables = screen.getByTestId('tools-tabs-variables');
    expect(toolsTabsVariables).toBeInTheDocument();
    fireEvent.click(toolsTabsVariables);

    const toolsTabsHeaders = screen.getByTestId('tools-tabs-headers');
    expect(toolsTabsHeaders).toBeInTheDocument();
    fireEvent.click(toolsTabsHeaders);

    const toolsTabsOpen = screen.getByTestId('tools-tabs-open');
    expect(toolsTabsOpen).toBeInTheDocument();
    fireEvent.click(toolsTabsOpen);
  });
});
