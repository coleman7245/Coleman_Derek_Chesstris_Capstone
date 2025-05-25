function calculateTBlockRotation(orientation) {
    let newPositions = {};
  
    switch (orientation) {
      case 0:
        newPositions.first_block = { top: 0, left: 30 };
        newPositions.second_block = { top: 0, left: -30 };
        newPositions.third_block = { top: 30, left: 0 };
        newPositions.main_block = { top: 0, left: 0 };
        break;
      case 90:
        newPositions.first_block = { top: -30, left: 0 };
        newPositions.second_block = { top: 30, left: 0 };
        newPositions.third_block = { top: 0, left: 30 };
        newPositions.main_block = { top: 0, left: 0 };
        break;
      case 180:
        newPositions.first_block = { top: 0, left: -30 };
        newPositions.second_block = { top: 0, left: 30 };
        newPositions.third_block = { top: -30, left: 0 };
        newPositions.main_block = { top: 0, left: 0 };
        break;
      case 270:
        newPositions.first_block = { top: 30, left: 0 };
        newPositions.second_block = { top: -30, left: 0 };
        newPositions.third_block = { top: 0, left: -30 };
        newPositions.main_block = { top: 0, left: 0 };
        break;
      default:
        break;
    }
  
    return newPositions;
  }
  
  function calculateLBlockRotation(orientation) {
    let newPositions = {};
  
    switch (orientation) {
      case 0:
        newPositions.first_block = { top: 30, left: -15 };
        newPositions.second_block = { top: 0, left: -15 };
        newPositions.third_block = { top: -30, left: -15 };
        newPositions.main_block = { top: 30, left: 15 };
        break;
      case 90:
        newPositions.first_block = { top: 15, left: 30 };
        newPositions.second_block = { top: 15, left: 0 };
        newPositions.third_block = { top: 15, left: -30 };
        newPositions.main_block = { top: -15, left: 30 };
        break;
      case 180:
        newPositions.first_block = { top: -30, left: 15 };
        newPositions.second_block = { top: 0, left: 15 };
        newPositions.third_block = { top: 30, left: 15 };
        newPositions.main_block = { top: -30, left: -15 };
        break;
      case 270:
        newPositions.first_block = { top: -15, left: -30 };
        newPositions.second_block = { top: -15, left: 0 };
        newPositions.third_block = { top: -15, left: 30 };
        newPositions.main_block = { top: 15, left: -30 };
        break;
      default:
        break;
    }
  
    return newPositions;
  }
  
  function calculateReverseLBlockRotation(orientation) {
    let newPositions = {};
  
    switch (orientation) {
      case 0:
        newPositions.first_block = { top: 30, left: 15 };
        newPositions.second_block = { top: 0, left: 15 };
        newPositions.third_block = { top: -30, left: 15 };
        newPositions.main_block = { top: 30, left: -15 };
        break;
      case 90:
        newPositions.first_block = { top: -15, left: 30 };
        newPositions.second_block = { top: -15, left: 0 };
        newPositions.third_block = { top: -15, left: -30 };
        newPositions.main_block = { top: 15, left: 30 };
        break;
      case 180:
        newPositions.first_block = { top: -30, left: -15 };
        newPositions.second_block = { top: 0, left: -15 };
        newPositions.third_block = { top: 30, left: -15 };
        newPositions.main_block = { top: -30, left: 15 };
        break;
      case 270:
        newPositions.first_block = { top: 15, left: -30 };
        newPositions.second_block = { top: 15, left: 0 };
        newPositions.third_block = { top: 15, left: 30 };
        newPositions.main_block = { top: -15, left: -30 };
        break;
      default:
        break;
    }
  
    return newPositions;
  }
  
  function calculateSquigglyBlockRotation(orientation) {
    let newPositions = {};
  
    switch (orientation) {
      case 0:
        newPositions.first_block = { top: 15, left: 0 };
        newPositions.second_block = { top: -15, left: 0 };
        newPositions.third_block = { top: -15, left: 30 };
        newPositions.main_block = { top: 15, left: -30 };
        break;
      case 90:
        newPositions.first_block = { top: 0, left: 15 };
        newPositions.second_block = { top: 0, left: -15 };
        newPositions.third_block = { top: -30, left: -15 };
        newPositions.main_block = { top: 30, left: 15 };
        break;
      case 180:
        newPositions.first_block = { top: -15, left: 0 };
        newPositions.second_block = { top: 15, left: 0 };
        newPositions.third_block = { top: 15, left: -30 };
        newPositions.main_block = { top: -15, left: 30 };
        break;
      case 270:
        newPositions.first_block = { top: 0, left: -15 };
        newPositions.second_block = { top: 0, left: 15 };
        newPositions.third_block = { top: 30, left: 15 };
        newPositions.main_block = { top: -30, left: -15 };
        break;
      default:
        break;
    }
  
    return newPositions;
  }
  
  function calculateReverseSquigglyBlockRotation(orientation) {
    let newPositions = {};
  
    switch (orientation) {
      case 0:
        newPositions.first_block = { top: 15, left: 0 };
        newPositions.second_block = { top: -15, left: 0 };
        newPositions.third_block = { top: -15, left: -30 };
        newPositions.main_block = { top: 15, left: 30 };
        break;
      case 90:
        newPositions.first_block = { top: 0, left: 15 };
        newPositions.second_block = { top: 0, left: -15 };
        newPositions.third_block = { top: 30, left: -15 };
        newPositions.main_block = { top: -30, left: 15 };
        break;
      case 180:
        newPositions.first_block = { top: -15, left: 0 };
        newPositions.second_block = { top: 15, left: 0 };
        newPositions.third_block = { top: 15, left: 30 };
        newPositions.main_block = { top: -15, left: -30 };
        break;
      case 270:
        newPositions.first_block = { top: 0, left: -15 };
        newPositions.second_block = { top: 0, left: 15 };
        newPositions.third_block = { top: -30, left: 15 };
        newPositions.main_block = { top: 30, left: -15 };
        break;
      default:
        break;
    }
  
    return newPositions;
  }
  
  function calculateSquareBlockRotation(orientation) {
    let newPositions = {};
  
    switch (orientation) {
      case 0:
        newPositions.first_block = { top: -15, left: -15 };
        newPositions.second_block = { top: 15, left: -15 };
        newPositions.third_block = { top: 15, left: 15 };
        newPositions.main_block = { top: -15, left: 15 };
        break;
      case 90:
        newPositions.first_block = { top: 15, left: -15 };
        newPositions.second_block = { top: 15, left: 15 };
        newPositions.third_block = { top: -15, left: 15 };
        newPositions.main_block = { top: -15, left: -15 };
        break;
      case 180:
        newPositions.first_block = { top: 15, left: 15 };
        newPositions.second_block = { top: -15, left: 15 };
        newPositions.third_block = { top: -15, left: -15 };
        newPositions.main_block = { top: 15, left: -15 };
        break;
      case 270:
        newPositions.first_block = { top: -15, left: 15 };
        newPositions.second_block = { top: -15, left: -15 };
        newPositions.third_block = { top: 15, left: -15 };
        newPositions.main_block = { top: 15, left: 15 };
        break;
      default:
        break;
    }
  
    return newPositions;
  }
  
  function calculateLineBlockRotation(orientation) {
    let newPositions = {};
  
    switch (orientation) {
      case 0:
        newPositions.first_block = { top: -15, left: 0 };
        newPositions.second_block = { top: 15, left: 0 };
        newPositions.third_block = { top: 45, left: 0 };
        newPositions.main_block = { top: -45, left: 0 };
        break;
      case 90:
        newPositions.first_block = { top: 0, left: -15 };
        newPositions.second_block = { top: 0, left: 15 };
        newPositions.third_block = { top: 0, left: 45 };
        newPositions.main_block = { top: 0, left: -45 };
        break;
      case 180:
        newPositions.first_block = { top: 15, left: 0 };
        newPositions.second_block = { top: -15, left: 0 };
        newPositions.third_block = { top: -45, left: 0 };
        newPositions.main_block = { top: 45, left: 0 };
        break;
      case 270:
        newPositions.first_block = { top: 0, left: 15 };
        newPositions.second_block = { top: 0, left: -15 };
        newPositions.third_block = { top: 0, left: -45 };
        newPositions.main_block = { top: 0, left: 45 };
        break;
      default:
        break;
    }
  
    return newPositions;
  }
  
  const tBlockStartPositions = {
    first_block: { top: 0, left: 30 },
    second_block: { top: 0, left: -30 },
    third_block: { top: 30, left: 0 },
    main_block: { top: 0, left: 0 },
    default_position: [135, 30]
  };
  
  const lBlockStartPositions = {
    first_block: { top: 30, left: -15 },
    second_block: { top: 0, left: -15 },
    third_block: { top: -30, left: -15 },
    main_block: { top: 30, left: 15 },
    default_position: [135, 30]
  };
  
  const reverseLBlockStartPositions = {
    first_block: { top: 30, left: 15 },
    second_block: { top: 0, left: 15 },
    third_block: { top: -30, left: 15 },
    main_block: { top: 30, left: -15 },
    default_position: [135, 30]
  };
  
  const squigglyBlockStartPositions = {
    first_block: { top: 15, left: 0 },
    second_block: { top: -15, left: 0 },
    third_block: { top: -15, left: 30 },
    main_block: { top: 15, left: -30 },
    default_position: [135, 30]
  };
  
  const reverseSquigglyBlockStartPositions = {
    first_block: { top: 15, left: 0 },
    second_block: { top: -15, left: 0 },
    third_block: { top: -15, left: -30 },
    main_block: { top: 15, left: 30 },
    default_position: [135, 30]
  };
  
  const squareBlockStartPositions = {
    first_block: { top: -15, left: -15 },
    second_block: { top: 15, left: -15 },
    third_block: { top: 15, left: 15 },
    main_block: { top: -15, left: 15 },
    default_position: [135, 30]
  };
  
  const lineBlockStartPositions = {
    first_block: { top: -15, left: 0 },
    second_block: { top: 15, left: 0 },
    third_block: { top: 45, left: 0 },
    main_block: { top: -45, left: 0 },
    default_position: [135, 30]
  };

  function createBlockConfig(type) {
    let config = {};

    switch(type) {
      case 'tBlock':
        config = {
          position: tBlockStartPositions.default_position,
          group_positions: tBlockStartPositions,
          orientation: 0,
          rotate_function: calculateTBlockRotation
        };
        break;
      case 'squigglyBlock':
        config = {
          position: squigglyBlockStartPositions.default_position,
          group_positions: squigglyBlockStartPositions,
          orientation: 0,
          rotate_function: calculateSquigglyBlockRotation
        };
        break;
      case 'reverseSquigglyBlock':
        config = {
          position: reverseSquigglyBlockStartPositions.default_position,
          group_positions: reverseSquigglyBlockStartPositions,
          orientation: 0,
          rotate_function: calculateReverseSquigglyBlockRotation
        };
        break;
      case 'lBlock':
        config = {
          position: lBlockStartPositions.default_position,
          group_positions: lBlockStartPositions,
          orientation: 0,
          rotate_function: calculateLBlockRotation
        };
        break;
      case 'reverseLBlock':
        config = {
          position: reverseLBlockStartPositions.default_position,
          group_positions: reverseLBlockStartPositions,
          orientation: 0,
          rotate_function: calculateReverseLBlockRotation
        };
        break;
      case 'squareBlock':
        config = {
          position: squareBlockStartPositions.default_position,
          group_positions: squareBlockStartPositions,
          orientation: 0,
          rotate_function: calculateSquareBlockRotation
        };
        break;
      case 'lineBlock':
        config = {
          position: lineBlockStartPositions.default_position,
          group_positions: lineBlockStartPositions,
          orientation: 0,
          rotate_function: calculateLineBlockRotation
        };
        break;
    }

    return config;
  }

  export { createBlockConfig };