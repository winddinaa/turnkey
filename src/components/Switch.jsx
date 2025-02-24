import React, { useState } from 'react';
import classNames from 'classnames';

function SwitchWithModal() {
  const [isSelected, setIsSelected] = useState(false); // Tracks switch state
  const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal visibility
  const [pendingState, setPendingState] = useState(false); // Tracks the pending state of the switch

  // Handle switch click to open the modal
  const handleSwitchClick = (newState) => {
    setPendingState(newState);
    setIsModalOpen(true);
  };

  // Confirm toggle action
  const confirmToggle = () => {
    setIsSelected(pendingState);
    setIsModalOpen(false);
  };

  // Cancel toggle action
  const cancelToggle = () => {
    setPendingState(false);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Switch Component */}
      <div
        onClick={() => handleSwitchClick(!isSelected)}
        className={classNames(
          'flex items-center w-14 h-7 bg-gray-600 rounded-full cursor-pointer transition-all duration-300',
          {
            'bg-green-500': isSelected,
          }
        )}
      >
        <span
          className={classNames(
            'h-6 w-6 bg-white rounded-full transition-all duration-300 transform',
            {
              'translate-x-7': isSelected,
            }
          )}
        ></span>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 ">
          <div className="bg-white rounded-lg p-6 w-3/6">
            <h2 className="text-3xl font-normal mb-4">Change Status</h2>
            <hr className="mt-5 mb-5"/>
            <p className='text-2xl font-normal mb-5'>Notification</p>
            <p className="mb-4">Are you sure you want to {pendingState ? 'enable' : 'disable'} status this department?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelToggle}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmToggle}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwitchWithModal;
