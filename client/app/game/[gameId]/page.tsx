'use client';
import type { NextPage } from 'next';
import Layout from 'ui/Layout';
import Game from 'features/game/modules/Game';
import { useSearchParams } from 'next/navigation';

const GamePage: NextPage = () => {
  const params = useSearchParams();
  const gameId = params.get('gameId') || '';

  return (
    <Layout showNavbar={false}>
      <Game gameId={gameId} />
    </Layout>
  );
};

export default GamePage;
