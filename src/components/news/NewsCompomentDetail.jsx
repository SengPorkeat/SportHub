import React from "react";
import logo from "../../assets/SportHubLogo.png";
import { FaCalendarAlt } from "react-icons/fa";

export default function NewsCompomentDetail() {
  return (
    <>
      <div className=" w-full h-auto ">
        <div className="flex flex-row justify-start items-center">
          <img src={logo} alt="logo" className="h-7 pr-1" />
          <h3 className="text-xl text-[#222162] font-semibold my-5">
            <span className="text-red-800">|</span> ព័ត៌មាន
          </h3>
        </div>
        <h1 className="text-2xl text-[#222162] font-bold leading-normal">
          ម្ចាស់មេដាយទាំង
          ៥គ្រឿងពីការប្រកួតសកលវិទ្យាល័យអាស៊ានបានដល់កម្ពុជាវិញហើយកាលពីល្ងាចម្សិលមិញ
        </h1>
        <p className="flex items-center text-gray-500 text-sm py-5">
          <FaCalendarAlt className="mr-2 w-[12px]" />
          2024-05-25 | 30K views
        </p>
        <div className="flex items-center mb-5">
          <img
            src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            alt="publisher image"
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <p className="ml-4 text-md text-gray-800 font-semibold group-hover:text-[#222162]">
            លី ដារ៉ូ
          </p>
        </div>

        <div className="pb-5 flex justify-center ">
          <img
            src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Sport-News/Local-Sports/CNE-Events/66866101d7d85_1720082640_medium.jpg"
            alt="news image"
            className="w-auto h-auto object-cover forced-color-adjust-auto rounded-lg "
          />
        </div>

        <p className="text-lg text-gray-900 leading-relaxed">
          <strong>ម្ចាស់មេដាយមាស ប្រាក់ សំរឹទ្ធ សរុបទាំង ៥គ្រឿង</strong>
          <br />
          លើ៣ប្រភេទកីឡាបានមកដល់កម្ពុជាវិញហើយបន្ទាប់ពីការប្រកួតលើប្រភេទកីឡារបស់ខ្លួនរួចហើយក្នុងព្រឹត្តិការណ៍ប្រកួតកីឡាសកលវិទ្យាល័យអាស៊ាន
          លើកទី២១ នៅប្រទេសឥណ្ឌូណេស៊ី។
        </p>
        <p className="text-lg text-gray-900 leading-relaxed mb-2">
          ឯកឧត្តម សាមឺឌីស៊ីវឌ្ឍនា រដ្ឋលេខាធិការក្រសួងអប់រំ យុវជន
          ដែលបានអញ្ជើញទៅស្វាគមន៍ប្រតិភូ គ្រូបង្វឹក និងកីឡាករ កីឡាការិនី
          ម្សិលមិញនេះថា ការមកដល់នេះកម្ពុជានេះគឺមាន ៣ប្រភេទកីឡា:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>ទី១ ប៉េតង់</li>
          <li>ទី២ យូដូ</li>
          <li>ទី៣ ហែលទឹក</li>
        </ul>
        <p className="text-lg text-gray-900 leading-relaxed mb-2">
          ចំពោះមេដាយដែលនាំមកនេះគឺប៉េតង់ ឈ្នះមេដាយមាស១ ប្រាក់១ សំរឹទ្ធ២
          រីឯប្រភេទកីឡាយូដូ ឈ្នះមេដាយប្រាក់១ សរុបទាំងអស់កម្ពុជាមេដាយ
          ៥គ្រឿងដោយមិនទាន់បូកប្រភេទកីឡា
          ៣ផ្សេងទៀតដែលកំពុងដំណើរការប្រកួតនៅឥណ្ឌូណេស៊ីនៅឡើយទេ។
        </p>
        <p className="text-lg text-gray-900 leading-relaxed mb-2">
          លទ្ធផលដ៏ល្អគាប់ប្រសើរនេះគឺបានដោយសារគោលនយោបាយជំរុញរបស់រាជរដ្ឋាភិបាលឲ្យប្រជាជនម្នាក់លេងកីឡាមួយប្រភេទ
          និងការលើកកម្ពស់ខ្លាំងដល់ក្រុមកីឡាករ
          កីឡាការិនីជម្រើសជាតិក្នុងការហ្វឹកហាត់ឈានដល់ដណ្ដើមមេដាយគ្រប់ការប្រកួតពិសេសព្រឹត្តិការណ៍អន្តរជាតិតែម្ដង។
        </p>
        <p className="text-lg text-gray-900 leading-relaxed">
          បញ្ជាក់ដែរថា កម្ពុជាបានបញ្ជូន
          ៦ប្រភេទកីឡាទៅចូលរួមប្រកួតកីឡាសកលវិទ្យាល័យអាស៊ាន លើកទី២១
          ដែលធ្វើឡើងនៅឥណ្ឌូណេស៊ី។ ដោយឡែកកីឡាប៉េតង់ យូដូ ហែលទឹក
          បានបញ្ចប់ការប្រកួតរបស់ខ្លួននិងបានវិលត្រឡប់មកដល់កម្ពុជាវិញហើយ។
          សម្រាប់កីឡាតេក្វាន់ដូ WT ការ៉ាតេ និងអត្តពលកម្ម
          គឺកំពុងដំណើរការប្រកួតនៅឡើយនោះទេ៕
        </p>
        <p className="inline-block text-md text-gray-800 font-normal pt-5">
          ប្រភព​ ៖
          <a
            href="https://news.sabay.com.kh/article/1356408#utm_campaign=onpage"
            className="text-blue-600 hover:text-blue-800 pl-1"
          >
            ម្ចាស់មេដាយទាំង
            ៥គ្រឿងពីការប្រកួតសកលវិទ្យាល័យអាស៊ានបានដល់កម្ពុជាវិញហើយកាលពីល្ងាចម្សិលមិញ
          </a>
        </p>
      </div>
    </>
  );
}
