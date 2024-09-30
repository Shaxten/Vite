import axios from 'axios';

// Export the PlayerStats interface
export interface PlayerStats {
    id: number;
    fullName: string;
    goals: number;
    sweaterNumber: number;
    headshot: string;
  }

// Function to fetch top players from the proxy API
export async function getTopPlayers(): Promise<PlayerStats[]> {
    try {
      // Make the request to the proxy API
      const response = await axios.get('/api/v1/skater-stats-leaders/20232024/2?categories=goals&limit=10');
  
      // Check if the response contains the expected 'goals' array
      const goalsData = response.data?.goals;
      if (!goalsData || !Array.isArray(goalsData)) {
        console.error('Invalid data format:', response.data);
        return [];
      }
  
      // Map the goalsData array to extract player information
      const players: PlayerStats[] = goalsData.map((player: any) => ({
        id: player.id,
        fullName: `${player.firstName.default} ${player.lastName.default}`, // Assuming 'en' is for English names
        goals: player.value, // Assuming 'value' holds the goals count
        sweaterNumber: player.sweaterNumber,
        headshot: player.headshot, // Player headshot URL
      }));
  
      return players;
    } catch (error) {
      console.error('Error fetching top players', error);
      throw error;
    }
  }