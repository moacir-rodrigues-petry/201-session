/**
 * This file contains setup and teardown functionality for tests
 * It can be used to initialize test environments, databases, etc.
 */

// Global setup before all tests run
export const setupTestEnv = async (): Promise<void> => {
  // No setup needed for this application as we're using in-memory data
  console.log("Test environment setup complete");
};

// Global teardown after all tests run
export const teardownTestEnv = async (): Promise<void> => {
  // No teardown needed for this application
  console.log("Test environment teardown complete");
};
