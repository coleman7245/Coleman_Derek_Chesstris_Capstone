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
    main_block: { top: 0, left: 0 }
  };
  
  const lBlockStartPositions = {
    first_block: { top: 30, left: -15 },
    second_block: { top: 0, left: -15 },
    third_block: { top: -30, left: -15 },
    main_block: { top: 30, left: 15 }
  };
  
  const reverseLBlockStartPositions = {
    first_block: { top: 30, left: 15 },
    second_block: { top: 0, left: 15 },
    third_block: { top: -30, left: 15 },
    main_block: { top: 30, left: -15 }
  };
  
  const squigglyBlockStartPositions = {
    first_block: { top: 15, left: 0 },
    second_block: { top: -15, left: 0 },
    third_block: { top: -15, left: 30 },
    main_block: { top: 15, left: -30 }
  };
  
  const reverseSquigglyBlockStartPositions = {
    first_block: { top: 15, left: 0 },
    second_block: { top: -15, left: 0 },
    third_block: { top: -15, left: -30 },
    main_block: { top: 15, left: 30 }
  };
  
  const squareBlockStartPositions = {
    first_block: { top: -15, left: -15 },
    second_block: { top: 15, left: -15 },
    third_block: { top: 15, left: 15 },
    main_block: { top: -15, left: 15 }
  };
  
  const lineBlockStartPositions = {
    first_block: { top: -15, left: 0 },
    second_block: { top: 15, left: 0 },
    third_block: { top: 45, left: 0 },
    main_block: { top: -45, left: 0 }
  };
  
  const defaultTransform = {
    position: [150, -30],
    group_positions: lineBlockStartPositions,
    orientation: 0,
  };

  export { defaultTransform, lineBlockStartPositions, squareBlockStartPositions, reverseSquigglyBlockStartPositions, squigglyBlockStartPositions, 
    reverseLBlockStartPositions, lBlockStartPositions, tBlockStartPositions, calculateLineBlockRotation, calculateSquareBlockRotation, 
    calculateReverseSquigglyBlockRotation, calculateSquigglyBlockRotation, calculateReverseLBlockRotation, calculateLBlockRotation, 
    calculateTBlockRotation };